using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public string ArrivalTime { get; set; }
        public string DeperatureTime { get; set; }
        public int? PathId { get; set; }
        public int? TrainId { get; set; }
        public string? Layover { get; set; }
        public string? DwellTime { get; set; }
    }
}
