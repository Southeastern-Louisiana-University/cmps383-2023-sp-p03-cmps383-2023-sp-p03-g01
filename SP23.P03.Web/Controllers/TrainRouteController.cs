using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Migrations;
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

        public TrainRouteController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainRoutes = dataContext.Set<TrainRoute>();
            trainPath = dataContext.Set<TrainPath>();
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
        public ActionResult<TrainRouteDto> CreateSection(TrainRouteDto dto)
        {
            var Path = trainPath.Where(x => x.Id == dto.PathId).FirstOrDefault();
            if (Path == null)
            {
                return BadRequest();
            }

            var TrainRoute = new TrainRoute
            {
                ArrivalTime = dto.ArrivalTime,
                DeperatureTime = dto.DeperatureTime,
                Path = Path,
                PathId = Path.Id,
            };
            trainRoutes.Add(TrainRoute);

            dataContext.SaveChanges();

            dto.Id = TrainRoute.Id;

            return CreatedAtAction(nameof(GetTrainRoutesById), new { id = dto.Id }, dto);
        }
        private static IQueryable<TrainRouteDto> GetTrainRouteDtos(IQueryable<TrainRoute> routes)
        {
            return routes
                .Select(x => new TrainRouteDto
                {
                    Id = x.Id,
                    ArrivalTime = x.ArrivalTime,
                    DeperatureTime = x.DeperatureTime,
                    PathId = x.PathId,
                    TrainId = x.Train.Id
                });
        }
    }
}
