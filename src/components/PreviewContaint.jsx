var Markdown = require('react-remarkable');

export default function PreviewContaint({ markdown }) {
  return  <Markdown source={markdown} />
}