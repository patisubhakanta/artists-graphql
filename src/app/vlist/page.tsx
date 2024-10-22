"use client";
import React, { useEffect, useState } from 'react';
import client from '@/lib/apolloClient';


const VehicleList = async ({ searchParams }: {searchParams:any}) => {
  const { data,loading,error } = await client.query({
    query: VEHICLE_LIST_ALL_QUERY,
    variables: { size: 20, page: 0, search: searchParams.search || undefined },
  });

  const vehicles = data?.vehicleList || [];

  

  return (
    <div className="max-w-lg mx-auto mt-10">
      <input
        type="text"
        defaultValue={searchParams.search || ''}
        className="border border-gray-300 p-2 rounded w-full"
        placeholder="Search for a vehicle..."
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error fetching vehicles: {error.message}</p>}
      <ul className="mt-4">
        {vehicles.length === 0 && !loading ? (
          <p>No vehicles found.</p>
        ) : (
          vehicles.map((vehicle: any) => (
            <li key={vehicle.id} className="border-b py-2 flex items-center">
              <img
                src={vehicle.media.image.thumbnail_url}
                alt={`${vehicle.naming.make} ${vehicle.naming.model}`}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="font-bold">
                  {vehicle.naming.make} {vehicle.naming.model}
                </h3>
                <p>Version: {vehicle.naming.version}</p>
                <p>Edition: {vehicle.naming.edition}</p>
                <p>Chargetrip Version: {vehicle.naming.chargetrip_version}</p>
                <p>Standard Connectors: {vehicle.connectors.map((conn: any) => conn.standard).join(', ')}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default VehicleList;
