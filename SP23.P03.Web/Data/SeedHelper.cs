using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.TrainTicket;



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
        await AddTrainPath(dataContext);
        await AddTrainRoute(dataContext);
        await AddTickets(dataContext);
        await AddTrainScheduledRoute(dataContext);

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
                Hours = "9:00 AM - 4:45 PM",
                City = "Hammond",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Orleans",
                Address = "1001 Loyola Avenue",
                Hours = "5:00 AM - 10:00 PM",
                City = "New Orleans",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Slidell",
                Address = "1827 Front St",
                Hours = "9:00 AM - 10:42 AM\r\n6:00 PM - 7:52 PM",
                City = "Slidell",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Picayune",
                Address = "200 South Highway 11",
                Hours = "unknown",
                City = "Picayune",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hattiesburg",
                Address = "308 Newman Street",
                Hours = "10:00 AM - 1:00 PM\r\n4:00 PM - 7:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Laurel",
                Address = "230 North Maple Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Laurel",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Meridian",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Meridian",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Baton Rouge",
                Address = "1900 Bacl Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Baton Rouge",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "McComb",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "McComb",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Brookhaven",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Brookhaven",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hazlehurst",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Jackson",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Jackson",
                State = "MS",
            }); 
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Yazoo City",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Yazoo City",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Schriever",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Schriever",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Iberia",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "New Iberia",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Lafayette",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Lafayette",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Lake Charles",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Lake Charles",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Shreveport",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Shreveport",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Texarkana",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Texarkana",
                State = "AR",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Marshall",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Marshall",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Longview",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Longview",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Nacogdoches",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Nacogdoches",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Beaumont",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Beaumont",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Galveston",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Galveston",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Houston",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Houston",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Tyler",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mineola",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Prairie View",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Bryan",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mesquite",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Dallas",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Waco",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Fort Worth",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Cleburne",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "McGregor",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Temple",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Taylor",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Austin",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "San Marcos",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "San Antonio",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Killeen",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Fort Hood",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Biloxi",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mobile",
                State = "AL",
            });


        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainPath(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainPath>();
        var trainStations = dataContext.Set<TrainStation>();
        var trains = dataContext.Set<Train>();

        var station1 = trainStations.First();
        var station2 = new TrainStation();
        var station3 = new TrainStation();
        var station4 = new TrainStation();
        var station5 = new TrainStation();
        var station6 = new TrainStation();
        var station7 = new TrainStation();
        var station8 = new TrainStation();
        var station9 = new TrainStation();
        var station10 = new TrainStation();
        var station11 = new TrainStation();
        var station12 = new TrainStation();
        var station13 = new TrainStation();
        var station14 = new TrainStation();

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
        if (trainStations.Find(7) != null)
        {
            station7 = trainStations.Find(7);
        }
        if (trainStations.Find(8) != null)
        {
            station8 = trainStations.Find(8);
        }
        if (trainStations.Find(9) != null)
        {
            station9 = trainStations.Find(9);
        }
        if (trainStations.Find(10) != null)
        {
            station10 = trainStations.Find(10);
        }
        if (trainStations.Find(11) != null)
        {
            station11 = trainStations.Find(11);
        }
        if (trainStations.Find(12) != null)
        {
            station12 = trainStations.Find(12);
        }
        if (trainStations.Find(13) != null)
        {
            station13 = trainStations.Find(13);
        }


        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station8,
                StartingTrainStationId = station8.Id,
                EndingTrainStation = station2,
                EndingTrainStationId = station2.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station2,
                StartingTrainStationId = station2.Id,
                EndingTrainStation = station1,
                EndingTrainStationId = station1.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station1,
                StartingTrainStationId = station1.Id,
                EndingTrainStation = station9,
                EndingTrainStationId = station9.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station9,
                StartingTrainStationId = station9.Id,
                EndingTrainStation = station10,
                EndingTrainStationId = station10.Id,
            });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station10,
               StartingTrainStationId = station10.Id,
               EndingTrainStation = station11,
               EndingTrainStationId = station11.Id,
           });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station11,
               StartingTrainStationId = station11.Id,
               EndingTrainStation = station12,
               EndingTrainStationId = station12.Id,
           });

        //reverse
        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station2,
                StartingTrainStationId = station2.Id,
                EndingTrainStation = station8,
                EndingTrainStationId = station8.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station1,
                StartingTrainStationId = station1.Id,
                EndingTrainStation = station2,
                EndingTrainStationId = station2.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station9,
                StartingTrainStationId = station9.Id,
                EndingTrainStation = station1,
                EndingTrainStationId = station1.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station10,
                StartingTrainStationId = station10.Id,
                EndingTrainStation = station9,
                EndingTrainStationId = station9.Id,
            });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station11,
               StartingTrainStationId = station11.Id,
               EndingTrainStation = station10,
               EndingTrainStationId = station10.Id,
           });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station12,
               StartingTrainStationId = station12.Id,
               EndingTrainStation = station11,
               EndingTrainStationId = station11.Id,
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
        if (seats.Find(9) != null)
        {
            ClassDseats.Add(seats.Find(9));
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
                Quantity = 22,
                type = "first class"
            });
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 4,
                type = "roomlet"
            });
        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainRoute(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainRoute>();
        var trains = dataContext.Set<Train>();
        var paths = dataContext.Set<TrainPath>();

        var path2 = new TrainPath();
        var path3 = new TrainPath();
        var path4 = new TrainPath();
        var path5 = new TrainPath();
        var path6 = new TrainPath();
        var path7 = new TrainPath();
        var path8 = new TrainPath();
        var path9 = new TrainPath();
        var path10 = new TrainPath();
        var path11 = new TrainPath();
        var path12 = new TrainPath();

        if (paths.Find(2) != null)
        {
            path2 = paths.Find(2);
        }
        if (paths.Find(3) != null)
        {
            path3 = paths.Find(3);
        }
        if (paths.Find(4) != null)
        {
            path4 = paths.Find(4);
        }
        if (paths.Find(5) != null)
        {
            path5 = paths.Find(5);
        }
        if (paths.Find(6) != null)
        {
            path6 = paths.Find(6);
        }
        if (paths.Find(7) != null)
        {
            path7 = paths.Find(7);
        }
        if (paths.Find(8) != null)
        {
            path8 = paths.Find(8);
        }
        if (paths.Find(9) != null)
        {
            path9 = paths.Find(9);
        }
        if (paths.Find(10) != null)
        {
            path10 = paths.Find(10);
        }
        if (paths.Find(11) != null)
        {
            path11 = paths.Find(11);
        }
        if (paths.Find(12) != null)
        {
            path12 = paths.Find(12);
        }


        var train2 = new Train();
        var train3 = new Train();
        var train4 = new Train();

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

        if (await trainRoutes.AnyAsync())
        {
            return;
        }

        //May 8, 8 am Baton Rouge to Jackson
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 8, 0, 0, 0, DateTimeKind.Utc),      
                DeperatureTime = new DateTime(2022, 5, 8, 10, 0, 0, 0, DateTimeKind.Utc),
                Path = paths.First(),
                PathId = paths.First().Id,
                Train = train4,
                DwellTime = null,
                Layover = "30 min",
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 10,30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 12, 15, 0, 0, DateTimeKind.Utc),
                Path = path2,
                PathId = path2.Id,
                Train = train2,
                DwellTime = null,
                Layover = "15 min",
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 12, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 14, 15, 0, 0, DateTimeKind.Utc),
                Path = path3,
                PathId = path3.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 14, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 15, 30, 0, 0, DateTimeKind.Utc),
                Path = path4,
                PathId = path4.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 15, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 16, 20, 0, 0, DateTimeKind.Utc),
                Path = path5,
                PathId = path5.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 16, 35, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 16, 50, 0, 0, DateTimeKind.Utc),
                Path = path6,
                PathId = path6.Id,
                Train = train2,
                DwellTime = null,
                Layover = null,
                PassengerCount = 1,
            });
        //May 8, 10 am Baton Rouge to Jackson
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 10, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 12, 00, 0, 0, DateTimeKind.Utc),
                Path = paths.First(),
                PathId = paths.First().Id,
                Train = train4,
                DwellTime = null,
                Layover = "30min",
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 12, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 14, 30, 0, 0, DateTimeKind.Utc),
                Path = path2,
                PathId = path2.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 14, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 16, 00, 0, 0, DateTimeKind.Utc),
                Path = path3,
                PathId = path3.Id,
                Train = train2,
                DwellTime = null,
                Layover = "30 min",
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 16, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 17, 30, 0, 0, DateTimeKind.Utc),
                Path = path4,
                PathId = path4.Id,
                Train = train3,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 17, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 18, 45, 0, 0, DateTimeKind.Utc),
                Path = path5,
                PathId = path5.Id,
                Train = train3,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 19, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 20, 00, 0, 0, DateTimeKind.Utc),
                Path = path6,
                PathId = path6.Id,
                Train = train3,
                DwellTime = null,
                Layover = null,
                PassengerCount = 1,
            });
        //May 14, 8 am Jackson to Baton Rouge \
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 8, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 9, 00, 0, 0, DateTimeKind.Utc),
                Path = path12,
                PathId = path12.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 9, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 10, 15, 0, 0, DateTimeKind.Utc),
                Path = path11,
                PathId = path11.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 10, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 11, 45, 0, 0, DateTimeKind.Utc),
                Path = path10,
                PathId = path10.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 12, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 13, 00, 0, 0, DateTimeKind.Utc),
                Path = path9,
                PathId = path9.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 13, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 14, 15, 0, 0, DateTimeKind.Utc),
                Path = path8,
                PathId = path8.Id,
                Train = train2,
                DwellTime = null,
                Layover = "30min",
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 14, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 16, 15, 0, 0, DateTimeKind.Utc),
                Path = path7,
                PathId = path7.Id,
                Train = train4,
                DwellTime = null,
                Layover = "30 min",
                PassengerCount = 1,
            });
        //May 14, 10 am Jackson to Baton Rouge \
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 10, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 11, 00, 0, 0, DateTimeKind.Utc),
                Path = path12,
                PathId = path12.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 11, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 12, 15, 0, 0, DateTimeKind.Utc),
                Path = path11,
                PathId = path11.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 12, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 13, 45, 0, 0, DateTimeKind.Utc),
                Path = path10,
                PathId = path10.Id,
                Train = train2,
                DwellTime = null,
                Layover = "30 min",
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 14, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 15, 00, 0, 0, DateTimeKind.Utc),
                Path = path9,
                PathId = path9.Id,
                Train = train3,
                DwellTime = "15 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 15, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 16, 15, 0, 0, DateTimeKind.Utc),
                Path = path8,
                PathId = path8.Id,
                Train = train3,
                DwellTime = "30 min",
                Layover = null,
                PassengerCount = 1,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 16, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 18, 15, 0, 0, DateTimeKind.Utc),
                Path = path7,
                PathId = path7.Id,
                Train = train4,
                DwellTime = null,
                Layover = null,
                PassengerCount = 1,
            });
        
        

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainScheduledRoute(DataContext dataContext)
    {
        var trainScheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
        var trainRoutes = dataContext.Set<TrainRoute>();
        var tickets = dataContext.Set<TrainRouteTicket>();

        if (await trainScheduledRoutes.AnyAsync())
        {
            return;
        }
        var groupofRoutes1 = new List<TrainRoute>();       
        groupofRoutes1.Add(trainRoutes.First());
        if (trainRoutes.Find(2) != null)
        {
            groupofRoutes1.Add(trainRoutes.Find(2));
        }
        if (trainRoutes.Find(3) != null)
        {
            groupofRoutes1.Add(trainRoutes.Find(3));
        }
        if (trainRoutes.Find(4) != null)
        {
            groupofRoutes1.Add(trainRoutes.Find(4));
        }
        if (trainRoutes.Find(5) != null)
        {
            groupofRoutes1.Add(trainRoutes.Find(5));
        }
        if (trainRoutes.Find(6) != null)
        {
            groupofRoutes1.Add(trainRoutes.Find(6));
        }

        var groupofRoutes2 = new List<TrainRoute>();
        if (trainRoutes.Find(7) != null)
        {
            groupofRoutes2.Add(trainRoutes.Find(7));
        }
        if (trainRoutes.Find(8) != null)
        {
            groupofRoutes2.Add(trainRoutes.Find(8));
        }
        if (trainRoutes.Find(9) != null)
        {
            groupofRoutes2.Add(trainRoutes.Find(9));
        }
        if (trainRoutes.Find(10) != null)
        {
            groupofRoutes2.Add(trainRoutes.Find(10));
        }
        if (trainRoutes.Find(11) != null)
        {
            groupofRoutes2.Add(trainRoutes.Find(11));
        }
        if (trainRoutes.Find(12) != null)
        {
            groupofRoutes2.Add(trainRoutes.Find(12));
        }

        var groupofRoutes3 = new List<TrainRoute>();
        if (trainRoutes.Find(13) != null)
        {
            groupofRoutes3.Add(trainRoutes.Find(13));
        }
        if (trainRoutes.Find(14) != null)
        {
            groupofRoutes3.Add(trainRoutes.Find(14));
        }
        if (trainRoutes.Find(15) != null)
        {
            groupofRoutes3.Add(trainRoutes.Find(15));
        }
        if (trainRoutes.Find(16) != null)
        {
            groupofRoutes3.Add(trainRoutes.Find(16));
        }
        if (trainRoutes.Find(17) != null)
        {
            groupofRoutes3.Add(trainRoutes.Find(17));
        }
        if (trainRoutes.Find(18) != null)
        {
            groupofRoutes3.Add(trainRoutes.Find(18));
        }

        var groupofRoutes4 = new List<TrainRoute>();
        if (trainRoutes.Find(19) != null)
        {
            groupofRoutes4.Add(trainRoutes.Find(19));
        }
        if (trainRoutes.Find(20) != null)
        {
            groupofRoutes4.Add(trainRoutes.Find(20));
        }
        if (trainRoutes.Find(21) != null)
        {
            groupofRoutes4.Add(trainRoutes.Find(21));
        }
        if (trainRoutes.Find(22) != null)
        {
            groupofRoutes4.Add(trainRoutes.Find(22));
        }
        if (trainRoutes.Find(23) != null)
        {
            groupofRoutes4.Add(trainRoutes.Find(23));
        }
        if (trainRoutes.Find(23) != null)
        {
            groupofRoutes4.Add(trainRoutes.Find(23));
        }

        var groupofTickets1 = new List<TrainRouteTicket>();
        groupofTickets1.Add(tickets.First());
        if (tickets.Find(2) != null)
        {
            groupofTickets1.Add(tickets.Find(2));
        }
        if (tickets.Find(3) != null)
        {
            groupofTickets1.Add(tickets.Find(3));
        }
        if (tickets.Find(4) != null)
        {
            groupofTickets1.Add(tickets.Find(4));
        }
        if (tickets.Find(5) != null)
        {
            groupofTickets1.Add(tickets.Find(5));
        }
        if (tickets.Find(6) != null)
        {
            groupofTickets1.Add(tickets.Find(6));
        }
        if (tickets.Find(7) != null)
        {
            groupofTickets1.Add(tickets.Find(7));
        }
        if (tickets.Find(8) != null)
        {
            groupofTickets1.Add(tickets.Find(8));
        }
        if (tickets.Find(9) != null)
        {
            groupofTickets1.Add(tickets.Find(9));
        }
        if (tickets.Find(10) != null)
        {
            groupofTickets1.Add(tickets.Find(10));
        }
        if (tickets.Find(11) != null)
        {
            groupofTickets1.Add(tickets.Find(11));
        }
        if (tickets.Find(12) != null)
        {
            groupofTickets1.Add(tickets.Find(12));
        }
        if (tickets.Find(13) != null)
        {
            groupofTickets1.Add(tickets.Find(13));
        }
        if (tickets.Find(14) != null)
        {
            groupofTickets1.Add(tickets.Find(14));
        }

        var groupofTickets2 = new List<TrainRouteTicket>();
        if (tickets.Find(15) != null)
        {
            groupofTickets2.Add(tickets.Find(15));
        }
        if (tickets.Find(16) != null)
        {
            groupofTickets2.Add(tickets.Find(16));
        }
        if (tickets.Find(17) != null)
        {
            groupofTickets2.Add(tickets.Find(17));
        }
        if (tickets.Find(18) != null)
        {
            groupofTickets2.Add(tickets.Find(18));
        }
        if (tickets.Find(19) != null)
        {
            groupofTickets2.Add(tickets.Find(19));
        }
        if (tickets.Find(20) != null)
        {
            groupofTickets2.Add(tickets.Find(20));
        }
        if (tickets.Find(21) != null)
        {
            groupofTickets2.Add(tickets.Find(21));
        }
        if (tickets.Find(22) != null)
        {
            groupofTickets2.Add(tickets.Find(22));
        }
        if (tickets.Find(23) != null)
        {
            groupofTickets2.Add(tickets.Find(23));
        }
        if (tickets.Find(24) != null)
        {
            groupofTickets2.Add(tickets.Find(24));
        }
        if (tickets.Find(25) != null)
        {
            groupofTickets2.Add(tickets.Find(25));
        }
        if (tickets.Find(26) != null)
        {
            groupofTickets2.Add(tickets.Find(26));
        }
        if (tickets.Find(27) != null)
        {
            groupofTickets2.Add(tickets.Find(27));
        }
        if (tickets.Find(28) != null)
        {
            groupofTickets2.Add(tickets.Find(28));
        }

        var groupofTickets3 = new List<TrainRouteTicket>();
        if (tickets.Find(29) != null)
        {
            groupofTickets3.Add(tickets.Find(29));
        }
        if (tickets.Find(30) != null)
        {
            groupofTickets3.Add(tickets.Find(30));
        }
        if (tickets.Find(31) != null)
        {
            groupofTickets3.Add(tickets.Find(31));
        }
        if (tickets.Find(32) != null)
        {
            groupofTickets3.Add(tickets.Find(32));
        }
        if (tickets.Find(33) != null)
        {
            groupofTickets3.Add(tickets.Find(33));
        }
        if (tickets.Find(34) != null)
        {
            groupofTickets3.Add(tickets.Find(34));
        }
        if (tickets.Find(35) != null)
        {
            groupofTickets3.Add(tickets.Find(35));
        }
        if (tickets.Find(36) != null)
        {
            groupofTickets3.Add(tickets.Find(36));
        }
        if (tickets.Find(37) != null)
        {
            groupofTickets3.Add(tickets.Find(37));
        }
        if (tickets.Find(38) != null)
        {
            groupofTickets3.Add(tickets.Find(38));
        }
        if (tickets.Find(39) != null)
        {
            groupofTickets3.Add(tickets.Find(39));
        }
        if (tickets.Find(40) != null)
        {
            groupofTickets3.Add(tickets.Find(40));
        }
        if (tickets.Find(41) != null)
        {
            groupofTickets3.Add(tickets.Find(41));
        }
        if (tickets.Find(42) != null)
        {
            groupofTickets3.Add(tickets.Find(42));
        }

        var groupofTickets4 = new List<TrainRouteTicket>();
        if (tickets.Find(43) != null)
        {
            groupofTickets4.Add(tickets.Find(43));
        }
        if (tickets.Find(44) != null)
        {
            groupofTickets4.Add(tickets.Find(44));
        }
        if (tickets.Find(45) != null)
        {
            groupofTickets4.Add(tickets.Find(45));
        }
        if (tickets.Find(46) != null)
        {
            groupofTickets4.Add(tickets.Find(46));
        }
        if (tickets.Find(47) != null)
        {
            groupofTickets4.Add(tickets.Find(47));
        }
        if (tickets.Find(48) != null)
        {
            groupofTickets4.Add(tickets.Find(48));
        }
        if (tickets.Find(49) != null)
        {
            groupofTickets4.Add(tickets.Find(49));
        }
        if (tickets.Find(50) != null)
        {
            groupofTickets4.Add(tickets.Find(50));
        }
        if (tickets.Find(51) != null)
        {
            groupofTickets4.Add(tickets.Find(51));
        }
        if (tickets.Find(52) != null)
        {
            groupofTickets4.Add(tickets.Find(52));
        }
        if (tickets.Find(53) != null)
        {
            groupofTickets4.Add(tickets.Find(53));
        }
        if (tickets.Find(54) != null)
        {
            groupofTickets4.Add(tickets.Find(54));
        }
        if (tickets.Find(55) != null)
        {
            groupofTickets4.Add(tickets.Find(55));
        }
        if (tickets.Find(56) != null)
        {
            groupofTickets4.Add(tickets.Find(56));
        }

        dataContext.Set<TrainScheduledRoutes>()
            .Add(new TrainScheduledRoutes
            {
                Routes = groupofRoutes1,
                Tickets = groupofTickets1,
            });
        dataContext.Set<TrainScheduledRoutes>()
            .Add(new TrainScheduledRoutes
            {
                Routes = groupofRoutes2,
                Tickets = groupofTickets2,
            });
        dataContext.Set<TrainScheduledRoutes>()
            .Add(new TrainScheduledRoutes
            {
                Routes = groupofRoutes3,
                Tickets = groupofTickets3,
            });
        dataContext.Set<TrainScheduledRoutes>()
            .Add(new TrainScheduledRoutes
            {
                Routes = groupofRoutes4,
                Tickets = groupofTickets4,
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTickets(DataContext dataContext)
    {
        var tickets = dataContext.Set<TrainRouteTicket>();
        var trainRoutes = dataContext.Set<TrainRoute>();
        var seats = dataContext.Set<Seat>();
        var users = dataContext.Set<User>();

        var Route2 = new TrainRoute();
        var Route3 = new TrainRoute();
        var Route4 = new TrainRoute();
        var Route5 = new TrainRoute();
        var Route6 = new TrainRoute();

        var Route7 = new TrainRoute();
        var Route8 = new TrainRoute();
        var Route9 = new TrainRoute();
        var Route10 = new TrainRoute();
        var Route11 = new TrainRoute();
        var Route12 = new TrainRoute();

        var Route13 = new TrainRoute();
        var Route14 = new TrainRoute();
        var Route15 = new TrainRoute();
        var Route16 = new TrainRoute();
        var Route17 = new TrainRoute();
        var Route18 = new TrainRoute();

        var Route19 = new TrainRoute();
        var Route20 = new TrainRoute();
        var Route21 = new TrainRoute();
        var Route22 = new TrainRoute();
        var Route23 = new TrainRoute();
        var Route24 = new TrainRoute();

        var seat1 = new Seat();
        var seat2 = new Seat();
        var seat3 = new Seat();
        var seat4 = new Seat();
        var seat5 = new Seat();
        var seat6 = new Seat();
        var seat7 = new Seat();
        var seat8 = new Seat();
        var seat9 = new Seat();

        if (seats.Find(1) != null)
        {
            seat1 = seats.Find(1);
        }
        if (seats.Find(2) != null)
        {
            seat2 = seats.Find(2);
        }
        if (seats.Find(3) != null)
        {
            seat3 = seats.Find(3);
        }
        if (seats.Find(4) != null)
        {
            seat4 = seats.Find(4);
        }
        if (seats.Find(5) != null)
        {
            seat5 = seats.Find(5);
        }
        if (seats.Find(6) != null)
        {
            seat6 = seats.Find(6);
        }
        if (seats.Find(7) != null)
        {
            seat7 = seats.Find(7);
        }
        if (seats.Find(8) != null)
        {
            seat8 = seats.Find(8);
        }
        if (seats.Find(9) != null)
        {
            seat9 = seats.Find(9);
        }

        if (trainRoutes.Find(2) != null)
        {
            Route2 = trainRoutes.Find(2);
        }
        if (trainRoutes.Find(3) != null)
        {
            Route3 = trainRoutes.Find(3);
        }
        if (trainRoutes.Find(4) != null)
        {
            Route4 = trainRoutes.Find(4);
        }
        if (trainRoutes.Find(5) != null)
        {
            Route5 = trainRoutes.Find(5);
        }
        if (trainRoutes.Find(6) != null)
        {
            Route6 = trainRoutes.Find(6);
        }


        if (trainRoutes.Find(7) != null)
        {
            Route7 = trainRoutes.Find(7);
        }
        if (trainRoutes.Find(8) != null)
        {
            Route8 = trainRoutes.Find(8);
        }
        if (trainRoutes.Find(9) != null)
        {
            Route9 = trainRoutes.Find(9);
        }
        if (trainRoutes.Find(10) != null)
        {
            Route10 = trainRoutes.Find(10);
        }
        if (trainRoutes.Find(11) != null)
        {
            Route11 = trainRoutes.Find(11);
        }
        if (trainRoutes.Find(12) != null)
        {
            Route12 = trainRoutes.Find(12);
        }


        if (trainRoutes.Find(13) != null)
        {
            Route13 = trainRoutes.Find(13);
        }
        if (trainRoutes.Find(14) != null)
        {
            Route14 = trainRoutes.Find(14);
        }
        if (trainRoutes.Find(15) != null)
        {
            Route15 = trainRoutes.Find(15);
        }
        if (trainRoutes.Find(16) != null)
        {
            Route16 = trainRoutes.Find(16);
        }
        if (trainRoutes.Find(17) != null)
        {
            Route17 = trainRoutes.Find(17);
        }
        if (trainRoutes.Find(18) != null)
        {
            Route18 = trainRoutes.Find(18);
        }


        if (trainRoutes.Find(19) != null)
        {
            Route19 = trainRoutes.Find(19);
        }
        if (trainRoutes.Find(20) != null)
        {
            Route20 = trainRoutes.Find(20);
        }
        if (trainRoutes.Find(21) != null)
        {
            Route21 = trainRoutes.Find(21);
        }
        if (trainRoutes.Find(22) != null)
        {
            Route22 = trainRoutes.Find(22);
        }
        if (trainRoutes.Find(23) != null)
        {
            Route23 = trainRoutes.Find(23);
        }
        if (trainRoutes.Find(24) != null)
        {
            Route24 = trainRoutes.Find(24);
        }

        if (await tickets.AnyAsync())
        {
            return;
        }
        //May 8 Route 1
        //Train 4
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 52.00,
                TrainRoute = trainRoutes.First(),
                SeatType = seat6.type,
                Code = "ABCDEFGHIJ",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 152.00,
                TrainRoute = trainRoutes.First(),
                SeatType = seat7.type,
                Code = "ABCDEFGHIJ",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102.00,
                TrainRoute = trainRoutes.First(),
                SeatType = seat8.type,
                Code = "ABCDEFGHIJ",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 204.00,
                TrainRoute = trainRoutes.First(),
                SeatType = seat9.type,
                Code = "ABCDEFGHIJ",
            });
        //Train 2
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route2,
               SeatType = seat2.type,
               Code = "BCDEFGHIJK",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route2,
                SeatType = seat3.type,
                Code = "BCDEFGHIJK",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route3,
               SeatType = seat2.type,
               Code = "BCDEFGHIJK",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route3,
                SeatType = seat3.type,
                Code = "BCDEFGHIJK",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route4,
               SeatType = seat2.type,
               Code = "BCDEFGHIJK",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route4,
                SeatType = seat3.type,
                Code = "BCDEFGHIJK",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route5,
               SeatType = seat2.type,
               Code = "BCDEFGHIJK",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route5,
                SeatType = seat3.type,
                Code = "BCDEFGHIJK",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route6,
               SeatType = seat2.type,
               Code = "BCDEFGHIJK",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route6,
                SeatType = seat3.type,
                Code = "BCDEFGHIJK",
            });
        //May 8 Route 2
        //Train 4
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 52.00,
                TrainRoute = Route7,
                SeatType = seat6.type,
                Code = "EFGHIJKlMN",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 152.00,
                TrainRoute = Route7,
                SeatType = seat7.type,
                Code = "EFGHIJKlMN",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102.00,
                TrainRoute = Route7,
                SeatType = seat8.type,
                Code = "EFGHIJKlMN",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 204.00,
                TrainRoute = Route7,
                SeatType = seat9.type,
                Code = "EFGHIJKlMN",
            });
        //Train 2
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route8,
               SeatType = seat2.type,
               Code = "FGHIJKlMNO",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route8,
                SeatType = seat3.type,
                Code = "FGHIJKlMNO",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route9,
               SeatType = seat2.type,
               Code = "FGHIJKlMNO",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route9,
                SeatType = seat3.type,
                Code = "FGHIJKlMNO",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route10,
               SeatType = seat2.type,
               Code = "FGHIJKlMNO",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route10,
                SeatType = seat3.type,
                Code = "FGHIJKlMNO",
            });
        //Train 3
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route11,
               SeatType = seat4.type,
               Code = "GHIJKlMNOP",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route11,
                SeatType = seat5.type,
                Code = "GHIJKlMNOP",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route12,
               SeatType = seat4.type,
               Code = "GHIJKlMNOP",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route12,
                SeatType = seat5.type,
                Code = "GHIJKlMNOP",
            });


        //May 14 Route 1
        //Train 2
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route13,
               SeatType = seat2.type,
               Code = "CDEFGHIJKL",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route13,
                SeatType = seat3.type,
                Code = "CDEFGHIJKL",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route14,
               SeatType = seat2.type,
               Code = "CDEFGHIJKL",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route14,
                SeatType = seat3.type,
                Code = "CDEFGHIJKL",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route15,
               SeatType = seat2.type,
               Code = "CDEFGHIJKL",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route15,
                SeatType = seat3.type,
                Code = "CDEFGHIJKL",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route16,
               SeatType = seat2.type,
               Code = "CDEFGHIJKL",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route16,
                SeatType = seat3.type,
                Code = "CDEFGHIJKL",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route17,
               SeatType = seat2.type,
               Code = "CDEFGHIJKL",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route17,
                SeatType = seat3.type,
                Code = "CDEFGHIJKL",
            });

        //Train 4
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 52.00,
                TrainRoute = Route18,
                SeatType = seat6.type,
                Code = "DEFGHIJKlM",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 152.00,
                TrainRoute = Route18,
                SeatType = seat7.type,
                Code = "DEFGHIJKlM",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102.00,
                TrainRoute = Route18,
                SeatType = seat8.type,
                Code = "DEFGHIJKlM",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 204.00,
                TrainRoute = Route18,
                SeatType = seat9.type,
                Code = "DEFGHIJKlM",
            });


        //May 14 Route 2
        //Train 2
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route19,
               SeatType = seat2.type,
               Code = "HIJKlMNOPQ",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route19,
                SeatType = seat3.type,
                Code = "HIJKlMNOPQ",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route20,
               SeatType = seat2.type,
               Code = "HIJKlMNOPQ",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route20,
                SeatType = seat3.type,
                Code = "HIJKlMNOPQ",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route21,
               SeatType = seat2.type,
               Code = "HIJKlMNOPQ",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route21,
                SeatType = seat3.type,
                Code = "HIJKlMNOPQ",
            });
        // Train 3

        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route22,
               SeatType = seat4.type,
               Code = "IJKlMNOPQR",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route22,
                SeatType = seat5.type,
                Code = "IJKlMNOPQR",
            });
        dataContext.Set<TrainRouteTicket>()
           .Add(new TrainRouteTicket
           {
               cost = 52,
               TrainRoute = Route23,
               SeatType = seat4.type,
               Code = "IJKlMNOPQR",
           });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102,
                TrainRoute = Route23,
                SeatType = seat5.type,
                Code = "IJKlMNOPQR",
            });

        //Train 4
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 52.00,
                TrainRoute = Route24,
                SeatType = seat6.type,
                Code = "JKlMNOPQRS",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 152.00,
                TrainRoute = Route24,
                SeatType = seat7.type,
                Code = "JKlMNOPQRS",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 102.00,
                TrainRoute = Route24,
                SeatType = seat8.type,
                Code = "JKlMNOPQRS",
            });
        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 204.00,
                TrainRoute = Route24,
                SeatType = seat9.type,
                Code = "JKlMNOPQRS",
            });

        await dataContext.SaveChangesAsync();
    }
}