using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;


namespace SP23.P03.Web.Controllers
{
    [Route("api/routes")]
    [ApiController]
    public class TrainRouteController : ControllerBase
    {
        private readonly DbSet<TrainRoute> trainRoutes;
        private readonly DataContext dataContext;

        public TrainRouteController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainRoutes = dataContext.Set<TrainRoute>();
        }
        [HttpGet]
        public IQueryable<TrainRouteDto> GetAllTrainRoutes()
        {
            return GetTrainRouteDtos(trainRoutes);
        }
        private static IQueryable<TrainRouteDto> GetTrainRouteDtos(IQueryable<TrainRoute> routes)
        {
            return routes
                .Select(x => new TrainRouteDto
                {
                    Id = x.Id,
                    StartingTrainStationId = x.StartingTrainStationId,
                    EndingTrainStationId= x.EndingTrainStationId,
                    ArrivalTime = x.ArrivalTime,
                    DeperatureTime = x.DeperatureTime,
                    TrainId = x.Train.Id,
                });
        }
    }
}
