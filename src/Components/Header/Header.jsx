import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between w-3/4 mx-auto items-center p-2  border-b-2 my-8'>
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;