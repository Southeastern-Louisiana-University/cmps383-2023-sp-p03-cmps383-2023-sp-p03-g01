using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SP23.P03.Web.Features.Trains
{
    public class TrainConfiguration : IEntityTypeConfiguration<Train>
    {
        public void Configure(EntityTypeBuilder<Train> builder)
        {
        }
    }
}
