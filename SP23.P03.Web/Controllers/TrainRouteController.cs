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
        private readonly DbSet<TrainPath> trainRoutes;
        private readonly DataContext dataContext;

        public TrainRouteController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainRoutes = dataContext.Set<TrainPath>();
        }
        [HttpGet]
        public IQueryable<TrainPathDto> GetAllTrainRoutes()
        {
            return GetTrainRouteDtos(trainRoutes);
        }
        private static IQueryable<TrainPathDto> GetTrainRouteDtos(IQueryable<TrainPath> routes)
        {
            return routes
                .Select(x => new TrainPathDto
                {
                    Id = x.Id,
                    StartingTrainStationId = x.StartingTrainStationId,
                    EndingTrainStationId= x.EndingTrainStationId,
                });
        }
    }
}
