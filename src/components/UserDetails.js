
import { Link, useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
    const { id } = useParams();
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="container mx-auto p-4">

            <Link to={'/'}>Back to Home</Link>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <img src={user.image} alt="Avatar" className="rounded-full w-16 h-16 mb-2" />
            <Link to={`/${user.id}`} className="text-blue-500 font-bold">
                {user.firstName} {user.maidenName} {user.lastName}
            </Link>

            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">
                Address: {user.address.address}, {user.address.city}
            </p>
            <p className="text-gray-600">Company Name: {user.company.name}</p>
        </div>
        </div>
    );
};

export default UserDetails;