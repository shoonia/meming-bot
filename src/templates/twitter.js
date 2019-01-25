module.exports = ({ link, title, body }) => {
  const twitTitle = title.slice(0, 104).trim();
  const twitBody = body.slice(0, (208 - twitTitle.length)).trim();

  const text = `${twitTitle}\n${twitBody}`.trim() || 'Meming.';

  return `${text} ${link}`;
}
