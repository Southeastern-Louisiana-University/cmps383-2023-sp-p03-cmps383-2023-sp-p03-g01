using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public DateTimeOffset DeperatureTime { get; set; }
        public int? PathId { get; set; }
        public int? TrainId { get; set; }
    }
}
