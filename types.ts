export type VehicleMake = {
    vehicle_id: number;
    name: string;
    vehicle_models: string[];
    year_range: number[];
};

export type VehicleModel = {
    vehicle_model_id: number;
    vehicle_make_id: number;
    model: string;
    vehicle_variants: string[];
    year_range: number[];
};

export type Transmission = {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    driving_wheel: string;
    transmission_type: string;
    value: string;
    final_gear_ratio: string;
    vehicle_variant_id: number;
};

type BodyDimension = {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    body_type_id: number;
    doors: number;
    number_of_doors: number;
    number_of_seats: number;
    number_of_years: number;
    model_code: string;
    overall_length: number;
    overall_width: number;
    overall_height: number;
    wheelbase: number;
    vehicle_variant_id: number;
    tread_front: number;
    tread_rear: number;
    interior_length: number;
    interior_width: number;
    interior_height: number;
    gvm: number;
};

export type Engine = {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    engine_model: string;
    maximum_ps_power: number;
    maximum_kw_power: number;
    maximum_rpm_power: number;
    maximum_kgm_torque: number;
    maximum_nm_torque: number;
    maximum_rpm_torque: number;
    cubic_capacity: number;
    bore: number;
    stroke: number;
    compression: number;
    fuel_supply_equipment: string;
    fuel_tank_equipment: number;
    engine_code: string;
    vehicle_variant_id: number;
};

export type VehicleVariant = {
    variant_id: number;
    name: string;
    vehicle_model_id: number;
    manufacture_year: number;
    engine_number: string;
    transmission: Transmission;
    body_dimension: BodyDimension;
    drive_type: string;
    fuel_type: string;
    engine: Engine;
    msrp: number;
    battery_capacity: number;
    registration_year: number;
    axle_configuration: string;
    top_speed: number;
    fuel_tank_size: number;
    co2_output: number;
    valves: number;
    range: number;
    combined_energy_consumption: number;
    charging_power_ac: number;
    charge_time: number;
    fast_charging_power_dc: number;
    fast_charge_time: number;
    gcm: number;
    tare: number;
    front_number_tires: number;
    front_tyre_type: number;
    rear_tyre_size: number;
    rear_number_tires: number;
    front_tire_size: number;
    length: number;
    height: number;
    width: number;
    wheelbase: number;
    price_history: string[];
    maximum_turning_radius: number;
    image_url: string | null;
    suspension_system_front: string;
    suspension_system_rear: string;
};

