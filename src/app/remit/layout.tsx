interface RemitLayout {
  children: React.ReactNode;
}

const RemitLayout = ({ children }: RemitLayout) => {
  return (
    <div>{children}</div>
  )
};

export default RemitLayout;