module.exports = ({ link, title, body }) => {
  const twitTitle = title.slice(0, 104) || 'Meming.';
  const twitBody = body.slice(0, 104);

  return `${twitTitle}\n${twitBody}`.trim() + '\n' + link;
}
