import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Dinesh Tamang",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/4u4",
  },
  {
    name: "Arif",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/k2j",
  },
  {
    name: "Rupen soni",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Deepak choudhary",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard 
            key={story.name}
            name={story.name} 
            src={story.src} 
            profile={story.profile} 
            />
      ))}
    </div>
  );
}

export default Stories;
