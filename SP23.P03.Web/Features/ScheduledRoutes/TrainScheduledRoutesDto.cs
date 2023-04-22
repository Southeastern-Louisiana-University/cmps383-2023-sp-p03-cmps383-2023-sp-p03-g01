using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRoutesDto
    {
        public int Id { get; set; }
        public IEnumerable<TrainRouteDto>? Routes { get; set; }

        public string DepartureStation { get; set; }
        public string ArrivalStation { get; set; }
    }
}
