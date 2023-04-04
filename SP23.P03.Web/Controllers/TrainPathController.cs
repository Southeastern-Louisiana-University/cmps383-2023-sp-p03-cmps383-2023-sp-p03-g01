using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Migrations;
using System.Diagnostics;


namespace SP23.P03.Web.Controllers
{
    [Route("api/paths")]
    [ApiController]
    public class TrainPathController : ControllerBase
    {
        private readonly DbSet<TrainPath> trainPaths;
        private readonly DbSet<TrainStation> stations;
        private readonly DataContext dataContext;
        

        public TrainPathController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainPaths = dataContext.Set<TrainPath>();
            stations = dataContext.Set<TrainStation>();
        }
        [HttpGet]
        public IQueryable<TrainPathDto> GetAllTrainPaths()
        {
            return GetTrainPathDtos(trainPaths);
        } 
        [HttpGet]
        [Route("{id}")]
        public ActionResult<TrainDto> GetTrainPathsById(int id)
        {
            var result = GetTrainPathDtos(trainPaths.Where(x => x.Id == id)).FirstOrDefault();
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
        [HttpPost]
        public ActionResult<TrainPathDto> CreateTrain(TrainPathDto dto)
        {
            var newEndingTrainStation = stations.Where(x=> x.Id == dto.EndingTrainStationId).FirstOrDefault();
            var newStartingTrainStation = stations.Where(x => x.Id == dto.StartingTrainStationId).FirstOrDefault();
            if (newEndingTrainStation == null) 
            {
                return NotFound();
            }
            if (newStartingTrainStation == null)
            {
                return NotFound();
            }
            var trainPath = new TrainPath
            {
               EndingTrainStationId = dto.EndingTrainStationId,
               EndingTrainStation = newEndingTrainStation,
               StartingTrainStationId = dto.StartingTrainStationId,
               StartingTrainStation = newStartingTrainStation,
            };
            trainPaths.Add(trainPath);

            dataContext.SaveChanges();

            dto.Id = trainPath.Id;

            return CreatedAtAction(nameof(GetTrainPathsById), new { id = dto.Id }, dto);
        }
        [HttpPut]
        [Route("{id}")]
        public ActionResult<TrainPathDto> UpdateTrain(int id, TrainPathDto dto)
        {
            var newEndingTrainStation = stations.Where(x => x.Id == dto.EndingTrainStationId).FirstOrDefault();
            var newStartingTrainStation = stations.Where(x => x.Id == dto.StartingTrainStationId).FirstOrDefault();
            if (newEndingTrainStation == null)
            {
                return NotFound();
            }
            if (newStartingTrainStation == null)
            {
                return NotFound();
            }

            var trainPath = trainPaths.FirstOrDefault(x => x.Id == id);
            if (trainPath == null)
            {
                return NotFound();
            }


            trainPath.StartingTrainStationId = dto.StartingTrainStationId;
            trainPath.EndingTrainStationId = dto.EndingTrainStationId;

            dataContext.SaveChanges();

            dto.Id = trainPath.Id;

            return Ok(dto);
        }
        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteTrain(int id)
        {
            var trainPath = trainPaths.FirstOrDefault(x => x.Id == id);
            if (trainPath == null)
            {
                return NotFound();
            }


            trainPaths.Remove(trainPath);

            dataContext.SaveChanges();

            return Ok();
        }
        private static IQueryable<TrainPathDto> GetTrainPathDtos(IQueryable<TrainPath> paths)
        {
            return paths
                .Select(x => new TrainPathDto
                {
                    Id = x.Id,
                    StartingTrainStationId = x.StartingTrainStationId,
                    EndingTrainStationId= x.EndingTrainStationId,
                });
        }
    }
}
