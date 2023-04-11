using SP23.P03.Web.Features.Route;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRoutesDto
    {
        public int Id { get; set; }
        public IEnumerable<TrainRouteDto>? Routes { get; set; }
    }
}
