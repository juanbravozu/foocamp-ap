import Project from './Project';

export default function Projects() {
  // must recibe project list and draw it with params
  return (
    <>
      <Project direction="lef" number={1} />
      <Project direction="right" number={2} />
      <Project direction="lef" number={3} />
      <Project direction="right" number={4} />
    </>
  );
}
