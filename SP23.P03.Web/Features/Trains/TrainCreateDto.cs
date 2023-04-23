using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Trains
{
    public class TrainCreateDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Locomotive { get; set; } = string.Empty;
        [Required]
        public int? TrainRouteId { get; set; }
    }
}
