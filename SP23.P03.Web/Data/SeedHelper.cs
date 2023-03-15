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

        await AddSeat(dataContext);
        await AddSection(dataContext);
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
        var sections = dataContext.Set<Section>();


        var train1Sections = new List<Section>();
        train1Sections.Add(sections.First());

        var train2Sections = new List<Section>();
        if(sections.Find(2)  != null) {
           train2Sections.Add(sections.Find(2));
        }

        var train3Sections = new List<Section>();
        if (sections.Find(3) != null)
        {
            train3Sections.Add(sections.Find(3));
        }

        var train4Sections = new List<Section>();
        if (sections.Find(4) != null)
        {
            train4Sections.Add(sections.Find(4));
        }

        if (await trains.AnyAsync())
        {
            return;
        }

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F150",
                Sections = train1Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F420",
                Sections = train2Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F750",
                Sections = train3Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F950",
                Sections = train4Sections
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddSection(DataContext dataContext)
    {
        var sections = dataContext.Set<Section>();
        var seats = dataContext.Set<Seat>();

        var ClassAseats = new List<Seat>();
        ClassAseats.Add(seats.First());

        var ClassBseats = new List<Seat>();
        if (seats.Find(2) != null)
        {
            ClassBseats.Add(seats.Find(2));
        }

        if (seats.Find(3) != null)
        {
            ClassBseats.Add(seats.Find(3));
        }

        var ClassCseats = new List<Seat>();
        if (seats.Find(4) != null)
        {
            ClassCseats.Add(seats.Find(4));
        }
        if (seats.Find(5) != null)
        {
            ClassCseats.Add(seats.Find(5));
        }

        var ClassDseats = new List<Seat>();
        if (seats.Find(6) != null)
        {
            ClassDseats.Add(seats.Find(6));
        }
        if (seats.Find(7) != null)
        {
            ClassDseats.Add(seats.Find(7));
        }
        if (seats.Find(8) != null)
        {
            ClassDseats.Add(seats.Find(8));
        }

        if (await sections.AnyAsync())
        {
            return;
        }


        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "A",
                Capacity = 168,
                Features = "Coach",
                SeatList = ClassAseats,
            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "B",
                Capacity = 168,
                Features = "Coach,First Class",
                SeatList = ClassBseats,
       

            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "C",
                Capacity = 168,
                Features = "Coach,First Class,Dining",
                SeatList = ClassCseats,
            
            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "D",
                Capacity = 56,
                Features = "First Class,Dining,Sleeper,Roomlet",
                SeatList = ClassDseats,
          

            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddSeat(DataContext dataContext)
    {
        var seats = dataContext.Set<Seat>();

        if (await seats.AnyAsync())
        {
            return;
        }
        //class A
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 168,
                type = "coach"
            });
        //class B
        dataContext.Set<Seat>()
             .Add(new Seat
             {
                 Quantity = 84,
                 type = "coach"
             });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "first class"
            });
        //class C
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "coach"
            });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 62,
                type = "first class"
            });
        //class D
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "coach"
            });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 10,
                type = "sleeper"
            });
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 4,
                type = "roomlet"
            });
        await dataContext.SaveChangesAsync();
    }   
}