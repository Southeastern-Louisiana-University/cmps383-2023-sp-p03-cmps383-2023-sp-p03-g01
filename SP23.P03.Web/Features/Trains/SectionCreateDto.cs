namespace SP23.P03.Web.Features.Trains
{
    public class SectionCreateDto
    {
        public int Id { get; set; }
        public string Class { get; set; } = string.Empty;

        public int Capacity { get; set; }
        public string Features { get; set; } = string.Empty;
    }
}
