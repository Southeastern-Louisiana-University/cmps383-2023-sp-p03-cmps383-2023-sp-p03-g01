using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Trains
{
    public class SeatDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public string type { get; set; }
    }
}
