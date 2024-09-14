function UserProfile() {
    return (
        <div className="bg-gray-100 p-8  max-w-sm max-w-xs max-auto my-20 md:p-8 sm:p-4 rounded-lg text-lg md:text-xl text-sm shadow-lg md:max-w-sm">
            <img
                src="https://via.placeholder.com/150"
                alt="User"
                className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
            />
            <h1 className="text-xl text-blue-800 my-4">
                John Doe
            </h1>
            <p className="text-gray-600 text-base">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;

// ["", "", "", ""]