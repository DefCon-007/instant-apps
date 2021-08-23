import styled, { keyframes } from "styled-components";

//------------Styled Components-------------

const sbinnala = keyframes`
	from {
		transform: rotate(10deg);
	}
	to {
		transform: rotate(80deg);
	}
`;

const rangDe = keyframes`
	0% { fill: rgba(251, 87, 58, 1); }
  50% { fill: rgba(251, 87, 58, 1); }
  51% { fill: rgba(50, 153, 79, 1); }
  100% { fill: rgba(50, 153, 79, 1); }
`;

const Logo = styled.svg`
  animation: ${sbinnala} 1s linear infinite alternate;
  path {
    animation: ${rangDe} 2s linear infinite;
  }
`;

//=========================================

function Renderer() {
  return (
    <Logo
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.818 17.8601C12.239 23.436 9.10843 30.9945 9.11525 38.8731C9.12206 46.7517 12.2654 54.3049 17.8541 59.8712C22.7551 64.7521 29.2081 67.7762 36.1026 68.4231C42.997 69.0699 49.902 67.2991 55.6291 63.4153L72.0276 79.7757C74.9112 77.4456 77.5421 74.8206 79.8776 71.9437L63.4792 55.5833C67.9262 49.0738 69.5993 41.0685 68.1302 33.3283C66.6611 25.5882 62.1703 18.7473 55.6457 14.3106C49.9135 10.4128 42.9968 8.63435 36.0903 9.28241C29.1839 9.93046 22.7213 12.9643 17.818 17.8601ZM57.1628 35.1637C57.6527 37.5573 57.6653 40.0238 57.1997 42.4222C56.7341 44.8206 55.7997 47.1041 54.4496 49.1421C53.0995 51.1802 51.3602 52.933 49.3311 54.3005C47.3019 55.6679 45.0225 56.6232 42.6233 57.1118C40.1622 57.6132 37.6249 57.6132 35.1638 57.1118C32.7604 56.6274 30.4761 55.6754 28.4415 54.3102C26.4069 52.945 24.6619 51.1933 23.3058 49.1553C21.9498 47.1172 21.0093 44.8326 20.5382 42.4319C20.0672 40.0313 20.0749 37.5615 20.5606 35.1637C21.0462 32.7659 22.0003 30.487 23.3686 28.4572C24.737 26.4273 26.4926 24.6861 28.5354 23.3332C30.5782 21.9803 32.8683 21.0421 35.2745 20.572C37.6808 20.102 40.1563 20.1094 42.5597 20.5939C46.1608 21.3199 49.4673 23.0898 52.0649 25.6819C54.6625 28.2741 56.4358 31.5732 57.1628 35.1661V35.1637Z"
        fill="black"
      />
      <path
        d="M53.3005 77.8195L61.7605 86.2599C51.9061 90.983 40.8254 92.5388 30.0472 90.7127C19.2689 88.8866 9.32433 83.7686 1.58523 76.0647C0.554953 75.0154 -0.0153793 73.6007 -0.000192583 72.1319C0.0149941 70.6631 0.614593 69.2604 1.66634 68.2326C2.70385 67.2184 4.09845 66.6504 5.55096 66.6504C7.00346 66.6504 8.39806 67.2184 9.43557 68.2326C15.0672 73.8413 22.1901 77.7245 29.9632 79.4234C37.7362 81.1222 45.8344 80.5656 53.3005 77.8195Z"
        fill="black"
      />
      <path
        d="M76.1596 1.66093C83.8816 9.38204 89.0116 19.3037 90.8421 30.057C92.6725 40.8103 91.1131 51.8654 86.3789 61.697L77.9189 53.2566C80.6708 45.808 81.2284 37.7292 79.5258 29.9746C77.8231 22.22 73.9315 15.1135 68.3104 9.49478C67.2586 8.46697 66.6592 7.06442 66.6439 5.59562C66.6286 4.12682 67.1985 2.71213 68.2287 1.66274C69.259 0.613435 70.6649 0.0154465 72.1371 0.000295048C73.6094 -0.0148564 75.0273 0.554079 76.079 1.58196C76.1064 1.60869 76.1339 1.63542 76.1607 1.66274L76.1596 1.66093Z"
        fill="black"
      />
    </Logo>
  );
}

const shouldRunMyApp = async ({ query }) => {
  const triggerQueries = ["my app"];

  for (const triggerQuery of triggerQueries) {
    if (query.toLowerCase() === triggerQuery) {
      return { query };
    }
  }

  return;
};

const MyApp = {
  name: "MyApp",
  description: "I am a template app, please change this description",
  // queryToData takes in the query and returns data which
  // the Component displays on the website.
  // If queryToData returns no data, we do not display the app.
  queryToData: shouldRunMyApp,
  Component: Renderer,
};

export default MyApp;
