using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using System.Globalization;
using System.Net.Sockets;
using System.Transactions;

namespace SP23.P03.Web.Controllers
{
    [Route("api/routes")]
    [ApiController]
    public class TrainRouteController : ControllerBase
    {
        private readonly DbSet<TrainRoute> trainRoutes;
        private readonly DataContext dataContext;
        private readonly DbSet<TrainPath> trainPath;
        private readonly DbSet<Train> trains;

        public TrainRouteController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainRoutes = dataContext.Set<TrainRoute>();
            trainPath = dataContext.Set<TrainPath>();
            trains = dataContext.Set<Train>();
        }
        [HttpGet]
        public IQueryable<TrainRouteDto> GetAllTrainRoutes()
        {
            return GetTrainRouteDtos(trainRoutes);
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult<TrainRouteDto> GetTrainRoutesById(int id)
        {
            var result = GetTrainRouteDtos(trainRoutes.Where(x => x.Id == id)).FirstOrDefault();
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
        [HttpPost]
        public ActionResult<TrainRouteDto> CreateRoute(TrainRouteCreateDto dto)
        {
            var Path = trainPath.Where(x => x.Id == dto.PathId).FirstOrDefault();
            if (Path == null)
            {
                return NotFound();
            }

            var Train = trains.Where(x => x.Id == dto.TrainId).FirstOrDefault();
            if (Train == null)
            {
                return NotFound();
            }

            var TrainRoute = new TrainRoute
            {
                ArrivalTime = dto.ArrivalTime,
                DeperatureTime = dto.DeperatureTime,
                Path = Path,
                PathId = Path.Id,
                Train = Train,
            };
            trainRoutes.Add(TrainRoute);

            dataContext.SaveChanges();

            dto.Id = TrainRoute.Id;

            return CreatedAtAction(nameof(GetTrainRoutesById), new { id = dto.Id }, dto);
        }
        [HttpPut]
        [Route("{id}")]
        public ActionResult<TrainRouteDto> UpdateRoute(int id, TrainRouteCreateDto dto)
        {
            var Path = trainPath.Where(x => x.Id == dto.PathId).FirstOrDefault();
            if (Path == null)
            {
                return NotFound();
            }

            var Train = trains.Where(x => x.Id == dto.TrainId).FirstOrDefault();
            if (Train == null)
            {
                return NotFound();
            }

            var trainRoute = trainRoutes.FirstOrDefault(x => x.Id == id);
            if (trainRoute == null)
            {
                return NotFound();
            }
            trainRoute.ArrivalTime = dto.ArrivalTime;
            trainRoute.DeperatureTime = dto.DeperatureTime;
            trainRoute.Path = Path;
            trainRoute.PathId = Path.Id;
            trainRoute.Train = Train;

            dataContext.SaveChanges();

            dto.Id = trainRoute.Id;

            return Ok(dto);
        }
        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteRoute(int id)
        {
            var trainRoute = trainRoutes.FirstOrDefault(x => x.Id == id);
            if (trainRoute == null)
            {
                return NotFound();
            }


            trainRoutes.Remove(trainRoute);

            dataContext.SaveChanges();

            return Ok();
        }
        private static IQueryable<TrainRouteDto> GetTrainRouteDtos(IQueryable<TrainRoute> routes)
        {
            return routes
                .Select(x => new TrainRouteDto
                {
                    Id = x.Id,
                    ArrivalTime = x.ArrivalTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    DeperatureTime = x.DeperatureTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    ArrivalStation = x.Path.StartingTrainStation.City + ", " + x.Path.StartingTrainStation.State,
                    DeperatureStation = x.Path.EndingTrainStation.City + ", " + x.Path.EndingTrainStation.State,
                    PassengerCount = x.PassengerCount,
                    DwellTime = x.DwellTime,
                    Layover = x.Layover,                  
                });
        }
    }
}
