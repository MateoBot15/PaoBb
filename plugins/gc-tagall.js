let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐧𝐟.𝐩𝐚𝐨.𝐟𝐟: ${pesan}`
let teks = `𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐩𝐥𝐚𝐧𝐭𝐢𝐭𝐚𝐬 🌱 𝐝𝐞𝐥 𝐬𝐞𝐧̃𝐨𝐫 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🌱  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐏𝐀𝐎 𝐁𝐁`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
