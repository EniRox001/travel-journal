import React from "react";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <TravelCard
        title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
        image = {item.imageUrl}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      {cards}
    </div>
  )
}