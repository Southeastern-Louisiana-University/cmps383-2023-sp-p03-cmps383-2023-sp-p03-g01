using SP23.P03.Web.Features.TrainRoutes;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string ArrivalTime { get; set; }
        [Required]
        public string DepartureTime { get; set; }
        [Required]
        public string DepartureStation { get; set; }
        [Required]
        public string ArrivalStation { get; set; }
        [Required]
        public int? PassengerCount { get; set; }
        public string? Layover { get; set; }
        public string? DwellTime { get; set; }
    }
}
