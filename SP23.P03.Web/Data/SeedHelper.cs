using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using System.Globalization;

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

        await AddSeat(dataContext);
        await AddSection(dataContext);
        await AddTrain(dataContext);
        await AddTrainRoute(dataContext);

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

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hammond",
                Address = "404 N.W. Railroad Avenue",
                Hours = "9:00 AM - 4:45 PM"
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Orlean",
                Address = "1001 Loyola Avenue",
                Hours = "5:00 AM - 10:00 PM"
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Slidell",
                Address = "1827 Front St",
                Hours = "9:00 AM - 10:42 AM\r\n6:00 PM - 7:52 PM"
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Picayune",
                Address = "200 South Highway 11",
                Hours = "unknown"
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hattiesburg",
                Address = "308 Newman Street",
                Hours = "10:00 AM - 1:00 PM\r\n4:00 PM - 7:00 PM"
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Meridian",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
            });


        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainRoute(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainRoute>();
        var trainStations = dataContext.Set<TrainStation>();
        var trains = dataContext.Set<Train>();

        var station1 = trainStations.First();
        var station2 = new TrainStation();
        var station3 = new TrainStation();
        var station4 = new TrainStation();
        var station5 = new TrainStation();
        var station6 = new TrainStation();

        if (trainStations.Find(2) != null)
        {
            station2 = trainStations.Find(2);
        }
        if (trainStations.Find(3) != null)
        {
            station3 = trainStations.Find(3);
        }
        if (trainStations.Find(4) != null)
        {
            station4 = trainStations.Find(4);
        }
        if (trainStations.Find(5) != null)
        {
            station5 = trainStations.Find(5);
        }
        if (trainStations.Find(6) != null)
        {
            station6 = trainStations.Find(6);
        }

        var train1 = trains.First();
        var train2 = new Train();
        var train3 = new Train();
        var train4 = new Train();
        var train5 = new Train();

        if (trains.Find(2) != null)
        {
            train2 = trains.Find(2);
        }
        if (trains.Find(3) != null)
        {
            train3 = trains.Find(3);
        }
        if (trains.Find(4) != null)
        {
            train4 = trains.Find(4);
        }
        if (trains.Find(5) != null)
        {
            train5 = trains.Find(5);
        }

        if (await trainRoutes.AnyAsync())
        {
            return;
        }


        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = DateTimeOffset.Parse("05/01/2022 6:00:00"),
                DeperatureTime = DateTimeOffset.Parse("05/01/2022 10:00:00"),
                StartingTrainStation = station1,
                StartingTrainStationId = station1.Id,
                EndingTrainStation = station2,
                EndingTrainStationId = station2.Id,
                Train = train5,
            });

        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = DateTimeOffset.Parse("05/01/2022 8:00:00"),
                DeperatureTime = DateTimeOffset.Parse("05/01/2022 12:00:00"),
                StartingTrainStation = station2,
                StartingTrainStationId = station2.Id,
                EndingTrainStation = station3,
                EndingTrainStationId = station3.Id,
                Train = train1,
            });

        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = DateTimeOffset.Parse("05/01/2022 13:00:00"),
                DeperatureTime = DateTimeOffset.Parse("05/01/2022 15:00:00"),
                StartingTrainStation = station3,
                StartingTrainStationId = station3.Id,
                EndingTrainStation = station4,
                EndingTrainStationId = station4.Id,
                Train = train2,
            });

        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = DateTimeOffset.Parse("05/01/2022 8:00:00"),
                DeperatureTime = DateTimeOffset.Parse("05/01/2022 12:00:00"),
                StartingTrainStation = station4,
                StartingTrainStationId = station4.Id,
                EndingTrainStation = station5,
                EndingTrainStationId = station5.Id,
                Train = train3,
            });

        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = DateTimeOffset.Parse("05/01/2022 8:00:00"),
                DeperatureTime = DateTimeOffset.Parse("05/01/2022 12:00:00"),
                StartingTrainStation = station5,
                StartingTrainStationId = station5.Id,
                EndingTrainStation = station6,
                EndingTrainStationId = station6.Id,
                Train = train4,
            });

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

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F950",
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