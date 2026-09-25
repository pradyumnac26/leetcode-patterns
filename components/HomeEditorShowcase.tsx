import type { Theme } from "@/lib/theme";

const DECK_FILES = [
  { id: "two-sum-unsorted", label: "two-sum-unsorted.mdx", active: true },
  { id: "climbing-stairs", label: "climbing-stairs.mdx", active: false },
  { id: "maximum-subarray", label: "maximum-subarray.mdx", active: false },
  { id: "merge-two-sorted-lists", label: "merge-two-sorted-lists.mdx", active: false },
];

type HomeEditorShowcaseProps = {
  theme: Theme;
};

export function HomeEditorShowcase({ theme }: HomeEditorShowcaseProps) {
  return (
    <div className="editor-showcase" data-theme={theme} aria-hidden>
      <div className="editor-showcase__window">
        <div className="editor-showcase__titlebar">
          <div className="editor-showcase__traffic">
            <span />
            <span />
            <span />
          </div>
          <p className="editor-showcase__window-title">LeetCode — two-sum · submission</p>
        </div>

        <div className="editor-showcase__body">
          <aside className="editor-showcase__sidebar">
            <p className="editor-showcase__sidebar-label">content/cards</p>
            <ul className="editor-showcase__file-list">
              {DECK_FILES.map((file) => (
                <li
                  key={file.id}
                  className={
                    file.active
                      ? "editor-showcase__file editor-showcase__file--active"
                      : "editor-showcase__file"
                  }
                >
                  {file.label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="editor-showcase__workspace">
            <div className="editor-showcase__tabs">
              <span className="editor-showcase__tab editor-showcase__tab--active">
                Submission
              </span>
              <span className="editor-showcase__tab">solution.py</span>
            </div>

            <div className="editor-showcase__split">
              <section className="editor-showcase__panel editor-showcase__panel--submit">
                <div className="editor-showcase__verdict">
                  <span className="editor-showcase__accepted">Accepted</span>
                  <span className="editor-showcase__cases">59 / 59 testcases</span>
                </div>

                <div className="editor-showcase__stat-block">
                  <div className="editor-showcase__stat-head">
                    <span className="editor-showcase__stat-name">Runtime</span>
                    <span className="editor-showcase__stat-value">48 ms</span>
                  </div>
                  <p className="editor-showcase__beats">Beats 92.41%</p>
                </div>

                <div className="editor-showcase__stat-block">
                  <div className="editor-showcase__stat-head">
                    <span className="editor-showcase__stat-name">Memory</span>
                    <span className="editor-showcase__stat-value">17.8 MB</span>
                  </div>
                  <p className="editor-showcase__beats">Beats 78.12%</p>
                </div>

                <p className="editor-showcase__optimized">
                  Optimal · hash-map · O(n) time · O(n) space
                </p>
              </section>

              <section className="editor-showcase__panel editor-showcase__panel--code">
                <pre className="editor-showcase__code">
                  <code>
                    <span className="editor-showcase__line">
                      <span className="editor-showcase__ln">1</span>
                      <span className="tok-kw">class</span>{" "}
                      <span className="tok-type">Solution</span>:
                    </span>
                    <span className="editor-showcase__line">
                      <span className="editor-showcase__ln">2</span>
                      {"    "}
                      <span className="tok-kw">def</span>{" "}
                      <span className="tok-fn">twoSum</span>(
                      <span className="tok-param">self</span>, nums, target):
                    </span>
                    <span className="editor-showcase__line">
                      <span className="editor-showcase__ln">3</span>
                      {"        "}
                      seen: <span className="tok-type">dict</span>[
                      <span className="tok-type">int</span>,{" "}
                      <span className="tok-type">int</span>] = {"{}"}
                    </span>
                    <span className="editor-showcase__line">
                      <span className="editor-showcase__ln">4</span>
                      {"        "}
                      <span className="tok-kw">for</span> i, num{" "}
                      <span className="tok-kw">in</span>{" "}
                      <span className="tok-fn">enumerate</span>(nums):
                    </span>
                    <span className="editor-showcase__line">
                      <span className="editor-showcase__ln">5</span>
                      {"            "}
                      need = target - num
                    </span>
                    <span className="editor-showcase__line editor-showcase__line--highlight">
                      <span className="editor-showcase__ln">6</span>
                      {"            "}
                      <span className="tok-kw">if</span> need{" "}
                      <span className="tok-kw">in</span> seen:
                    </span>
                    <span className="editor-showcase__line">
                      <span className="editor-showcase__ln">7</span>
                      {"                "}
                      <span className="tok-kw">return</span> [seen[need], i]
                    </span>
                  </code>
                </pre>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="editor-showcase__terminal">
        <p className="editor-showcase__terminal-prompt">
          <span className="editor-showcase__terminal-caret">›</span> submission accepted ·
          optimal hash-map solution
        </p>
      </div>
    </div>
  );
}
