type handleNote = {
  pageUrl: string;
};

export default function handleNote({ pageUrl }: handleNote) {
  console.log('here', pageUrl);
}
