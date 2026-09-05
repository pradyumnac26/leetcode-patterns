import { MDXRemote } from "next-mdx-remote/rsc";

type MdxBodyProps = {
  source: string;
};

export function MdxBody({ source }: MdxBodyProps) {
  return (
    <div className="mdx-body">
      <MDXRemote source={source} />
    </div>
  );
}
