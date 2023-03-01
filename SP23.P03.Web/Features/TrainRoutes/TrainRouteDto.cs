using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public DateTimeOffset DeperatureTime { get; set; }
        public int? StartingTrainStationId { get; set; }
        public int? EndingTrainStationId { get; set; }
        public Train? Train { get; set; }
    }
}
