using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers
{
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
        public IQueryable<TrainDto> GetAllTrains()
        {
            return GetTrainDtos(trains);
        }
    }
}
