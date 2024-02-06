import React, { useEffect, useState } from "react";

const useGetUsers = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getUsers = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.log("error", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return { isLoading, users, getUsers };
};

export default useGetUsers;
