import React, { useState } from "react";

const useCount = (initialCount) => {
	const [count, setCount] = useState(initialCount);
	const [total, setTotal] = useState(initialCount);

	const onPlusClick = () => {
		setCount(count + 1);
		setTotal(total + 10);
	};
	const onMinusClick = () => {
		setCount(count - 1);
		setTotal(total - 10);
	};
	return { count, total, onMinusClick, onPlusClick };
};

export default useCount;
