using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers;

[Route("api/trains")]
[ApiController]
    public class TrainController : ControllerBase
    {
        private readonly DbSet<Train> trains;
        private readonly DataContext dataContext;

        public TrainController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trains = dataContext.Set<Train>();
        }
    [HttpGet]
    public IQueryable<TrainDto> GetAllTrains()
    {
        return GetTrainDtos(trains);
    }
    private static IQueryable<TrainDto> GetTrainDtos(IQueryable<Train> trains)
    {
        return trains
            .Select(x => new TrainDto
            {
                Id = x.Id,
                Capacity= x.Capacity,
                Features= x.Features,
                Model= x.Model,
                Sections= x.Sections,
                TrainRouteId = x.TrainRouteId,
            });
    }
}
