using Microsoft.EntityFrameworkCore;

namespace SP23.P03.Web.Features.Trains
{
    public class Section
    {
        public int Id { get; set; }
        public string Class { get; set; } = string.Empty;

        public int? TrainId { get; set; }
        public Train? Train { get; set; }
        public int Capacity { get; set; }
        public string Features { get; set; } = string.Empty;

        public ICollection<Seat>? SeatList { get; set; }
    }
}
