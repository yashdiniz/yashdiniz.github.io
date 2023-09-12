interface Props {
  command: string;
}
export default function TermHeader({ command }: Props) {
  return (
    <div>
      <span style={{
        color: '#00ff00',
        paddingRight: '0.5em',
      }}>
        %~&gt;
      </span>
      {command == 'cd' ? `cd ${document.location.pathname}` : command}
    </div>
  )
}
