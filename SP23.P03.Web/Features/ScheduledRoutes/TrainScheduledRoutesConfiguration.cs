using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRoutesConfiguration: IEntityTypeConfiguration<TrainScheduledRoutes>
    {
        public void Configure(EntityTypeBuilder<TrainScheduledRoutes> builder)
        {
        }
    }
}
