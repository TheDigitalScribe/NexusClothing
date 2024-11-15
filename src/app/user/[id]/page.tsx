import React from 'react'

const UserAccountPage = ({ params }: { params: { id: string } }) => {
  const userId = params.id;
  return (
    <div>
      <button>Sign Out</button>
    </div>
  )
}

export default UserAccountPage;