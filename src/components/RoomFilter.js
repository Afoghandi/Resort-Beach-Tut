import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get unique value
const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({ rooms }) {
	const context = useContext(RoomContext);

	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets
	} = context;
	//get unique types
	let types = getUnique(rooms, "type");
	//add all
	types = ["all", ...types];
	//map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	let people = getUnique(rooms, "capacity");
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});
	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* select type*/}
				<div className="form-group">
					<label htmlFor="type"> room Type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>

					{/*end select type */}
					{/* select guest*/}

					<label htmlFor="capacity"> Capacity</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/*end select guest */}
				{/*start price */}
				<div className="form-group">
					<label htmlFor="price">room price: £{price}</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					></input>
				</div>
				{/*end price */}
				{/*start size */}
				<div className="form-group">
					<label htmlFor="size"> room size</label>
					<input
						type="number"
						id="size"
						name="minSize"
						value={minSize}
						onChange={handleChange}
						className="size-input"
					></input>
					<input
						type="number"
						id="size"
						name="maxSize"
						value={maxSize}
						onChange={handleChange}
						className="size-input"
					></input>
				</div>
				{/**end size */}
				{/**start extra */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
					</div>

					{/**end breakfast */}

					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">Pets</label>
					</div>
				</div>
			</form>
		</section>
	);
}
