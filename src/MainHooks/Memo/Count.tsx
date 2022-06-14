import React from "react";

const render: any = {
  count1: 0,
  count2: 0,
};

export default React.memo(function Count({ id, value }: { id: any; value: any }) {
  console.warn(`🔴 Count${id} render: ${++render[`count${id}`]}`);

  return (
    <div>
      <h1 className="cyan">{value}</h1>
    </div>
  );
});
