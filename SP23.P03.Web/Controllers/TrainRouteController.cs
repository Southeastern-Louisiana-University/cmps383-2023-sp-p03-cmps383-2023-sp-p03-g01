using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainRoutes;

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
            return GetTrainPouteDtos(trainRoutes);
        }
        private static IQueryable<TrainRouteDto> GetTrainPouteDtos(IQueryable<TrainRoute> routes)
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
