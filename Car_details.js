let car_details = {
    Dimentions: {
        over_all_length: 3500 + " mm",
        over_all_width: 1600 + " mm",
        over_all_height: 1490 + " mm",
        wheel_base: 2360 + " mm",
        track_width: {
            front: 1405 + " mm",
            rear: 1400 + " mm"
        },
        minimum_turning_radius: 4.5 + " m",
        minimum_ground_clearence: 170 + " mm"
    },
    capacities: {
        seating_capacity: 5 + " persons",
        fuel_tank_capacity: 35 + " liters"
    },
    Engine: {
        type: "KB-series",
        No_of_cylinders: 3,
        No_of_valves: 12,
        capacity: 998 + " cc/cm3",
        "Bore x stroke": "73.0 x 79.5 mm",
        compression_ratio: "10:1",
        maximum_power: "67/6,200 PS/rpm",
        maximum_torque: "90/3,500 Nm/rpm",
        Fuel_distributer: "Multipoint injection"
    },
    Transmission: {
        type: "5-speed MT"
    },
    Chassis: {
        Steering: "Rack & Pinion, Power assisted",
        breaks: {
            front: "Ventilated disc",
            rear: "drums"
        },
        suspention: {
            front: "MacPherson strut & coil spring",
            rear: "Isolated trailing link & coil spring"
        },
        Shock_absorbers: "Gas filled",
        "tyre (tubeless)": "155/80R13"
    },
    Weights: {
        "Kerb_Weight (min.with full options)": "860-880 Kg",
        Gross_vehicle_weight: "1,320 Kg"
    }
}
console.log(car_details);