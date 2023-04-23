using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteCreateDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public DateTimeOffset ArrivalTime { get; set; }
        [Required]
        public DateTimeOffset DeperatureTime { get; set; }
        public int? PathId { get; set; }
        public int? TrainId { get; set; }
        [Required]
        public string? Layover { get; set; }
        [Required]
        public string? DwellTime { get; set; }
    }
}
