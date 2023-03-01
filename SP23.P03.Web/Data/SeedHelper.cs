using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);

        await AddTrainStation(dataContext);
        await AddTrainRoute(dataContext);
        await AddTrain(dataContext);

    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddTrainStation(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();

        if (await trainStations.AnyAsync())
        {
            return;
        }

        for (int i = 0; i < 3; i++)
        {
            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Hammond",
                    Address = "1234 Place st"
                });
        }

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainRoute(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainRoute>();

        if (await trainRoutes.AnyAsync())
        {
            return;
        }

        for (int i = 0; i < 3; i++)
        {
            dataContext.Set<TrainRoute>()
                .Add(new TrainRoute
                {
                    DeperatureTime = DateTimeOffset.Now,
                    ArrivalTime= DateTimeOffset.Now,
                });
        }

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrain(DataContext dataContext)
    {
        var trains = dataContext.Set<Train>();

        if (await trains.AnyAsync())
        {
            return;
        }

        for (int i = 0; i < 3; i++)
        {
            dataContext.Set<Train>()
                .Add(new Train
                {
                    Capacity = i + i,
                    Model = "F150",
                });
        }

        await dataContext.SaveChangesAsync();
    }


}