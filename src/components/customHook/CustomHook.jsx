import React, { useState } from "react";
import useCount from "../hooks/useCount";
import useGetUsers from "../hooks/useGetUsers";
import "./customHook.style.css";

const CustomHook = () => {
	const { count, total, onMinusClick, onPlusClick } = useCount(0);
	const { isLoading, users, getUsers } = useGetUsers();

	function renderUsers(users) {
		return (
			<ol>
				{users.map((el, index) => (
					<li key={index}>{el.name}</li>
				))}
			</ol>
		);
	}
	return (
		<div className="CustomHook-container">
			<button className="CustomHook-button" onClick={onPlusClick}>
				+
			</button>
			<p>{count}</p>
			<p>{total}</p>
			<button className="CustomHook-button" onClick={onMinusClick}>
				-
			</button>
			<button onClick={getUsers}>Get users Again</button>
			{isLoading ? <p>Loading...</p> : renderUsers(users)}
		</div>
	);
};

export default CustomHook;
