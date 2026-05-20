(function () {
  const builders = window.VITALITY_BUILDERS || [];
  const inBuildersFolder = window.location.pathname.toLowerCase().includes("/builders/");
  const prefix = inBuildersFolder ? "../" : "";
  const builderPrefix = inBuildersFolder ? "" : "builders/";

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function slugDate() {
    return today();
  }

  function renderHeader() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;
    const current = document.body.dataset.page || "";
    header.innerHTML = `
      <div class="nav-shell">
        <a class="brand" href="${prefix}index.html" aria-label="Straddie Vitality Network home">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Straddie Vitality</span>
        </a>
        <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span>
          <span class="sr-only">Menu</span>
        </button>
        <nav class="site-nav" id="site-nav" data-site-nav>
          <a href="${prefix}index.html" ${current === "home" ? 'aria-current="page"' : ""}>Home</a>
          <a href="${prefix}builders/index.html" ${current === "builders" || current === "builder" ? 'aria-current="page"' : ""}>Builders</a>
          <a href="${prefix}docs/research-baseline.md">Evidence</a>
          <a href="${prefix}sources/source-register.json">Sources</a>
        </nav>
      </div>
    `;
  }

  function renderFooter() {
    const footer = document.querySelector("[data-site-footer]");
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-inner">
        <p>Straddie Vitality Network Builders. Public-source evidence first, approval before publishing.</p>
        <p>Planning support only. Health, legal, insurance and regulatory decisions need qualified review.</p>
      </div>
    `;
  }

  function setupNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  function setupTopButton() {
    const button = document.createElement("button");
    button.className = "top-button visible";
    button.type = "button";
    button.title = "Back to top";
    button.setAttribute("aria-label", "Back to top");
    button.innerHTML = "&uarr;";
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(button);
  }

  function builderUrl(builder) {
    return `${builderPrefix}${builder.page}`;
  }

  function renderBuilderCards() {
    document.querySelectorAll("[data-builder-cards]").forEach((target) => {
      target.innerHTML = builders.map((builder, index) => `
        <a class="builder-card" href="${builderUrl(builder)}">
          <span class="builder-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(builder.title)}</h3>
          <p>${escapeHtml(builder.description)}</p>
          <span class="builder-file">${escapeHtml(builder.file)}</span>
        </a>
      `).join("");
    });
  }

  function fieldId(field) {
    return `field-${field.name}`;
  }

  function fieldMarkup(field) {
    const id = fieldId(field);
    const helper = field.helper ? `<small>${escapeHtml(field.helper)}</small>` : "";
    const placeholder = field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : "";
    const privateFlag = field.private ? `<span class="field-flag">Private / approval-gated</span>` : "";

    if (field.type === "textarea") {
      return `
        <label class="field field-wide" for="${id}">
          <span>${escapeHtml(field.label)}${privateFlag}</span>
          <textarea id="${id}" name="${field.name}" rows="${field.rows || 4}"${placeholder}></textarea>
          ${helper}
        </label>
      `;
    }

    if (field.type === "select") {
      return `
        <label class="field" for="${id}">
          <span>${escapeHtml(field.label)}${privateFlag}</span>
          <select id="${id}" name="${field.name}">
            ${(field.options || []).map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("")}
          </select>
          ${helper}
        </label>
      `;
    }

    if (field.type === "checkbox-group") {
      return `
        <fieldset class="field field-wide checkbox-group" data-field-name="${field.name}">
          <legend>${escapeHtml(field.label)}${privateFlag}</legend>
          <div class="checkbox-grid">
            ${(field.options || []).map(([value, label]) => `
              <label><input type="checkbox" name="${field.name}" value="${escapeHtml(value)}"> ${escapeHtml(label)}</label>
            `).join("")}
          </div>
          ${helper}
        </fieldset>
      `;
    }

    const type = field.type || "text";
    return `
      <label class="field" for="${id}">
        <span>${escapeHtml(field.label)}${privateFlag}</span>
        <input id="${id}" name="${field.name}" type="${type}"${placeholder}>
        ${helper}
      </label>
    `;
  }

  function groupFields(fields) {
    return fields.reduce((groups, field) => {
      const group = field.group || "Details";
      if (!groups[group]) groups[group] = [];
      groups[group].push(field);
      return groups;
    }, {});
  }

  function renderBuilderShell() {
    const shell = document.querySelector("[data-builder-shell]");
    if (!shell) return;
    const id = document.body.dataset.builderPage;
    const builder = builders.find((item) => item.id === id);
    if (!builder) {
      shell.innerHTML = `<section class="page-intro"><h1>Builder not found</h1><p class="lede">Return to the builder directory and choose an available builder.</p></section>`;
      return;
    }

    const groups = groupFields(builder.fields);
    const index = builders.indexOf(builder);
    const previous = builders[index - 1];
    const next = builders[index + 1];

    shell.innerHTML = `
      <section class="page-intro builder-intro">
        <p class="step-label">Builder ${String(index + 1).padStart(2, "0")} of ${builders.length}</p>
        <h1>${escapeHtml(builder.title)}</h1>
        <p class="lede">${escapeHtml(builder.description)}</p>
        <p class="claim-boundary">${escapeHtml(builder.claimBoundary)}</p>
      </section>
      <section class="builder-layout">
        <form class="builder-form" data-builder-form>
          ${Object.entries(groups).map(([group, fields]) => `
            <fieldset>
              <legend>${escapeHtml(group)}</legend>
              <div class="form-grid">
                ${fields.map(fieldMarkup).join("")}
              </div>
            </fieldset>
          `).join("")}
          <div class="builder-actions">
            <button class="button primary" type="button" data-generate>Refresh preview</button>
            <button class="button secondary" type="button" data-copy>Copy Markdown</button>
            <button class="button secondary" type="button" data-download>Download .md</button>
            <button class="button quiet" type="button" data-clear>Reset</button>
          </div>
          <p class="status-line" data-status>Draft preview is generated locally in this browser.</p>
        </form>
        <aside class="preview-panel" aria-label="Markdown preview">
          <div class="preview-head">
            <h2>Markdown Preview</h2>
            <span>${escapeHtml(builder.file)}</span>
          </div>
          <textarea data-markdown-output spellcheck="false" aria-label="Generated Markdown"></textarea>
        </aside>
      </section>
      <nav class="builder-pager" aria-label="Builder sequence">
        ${previous ? `<a class="pager-link" href="${previous.page}">&larr; ${escapeHtml(previous.title)}</a>` : `<a class="pager-link" href="index.html">&larr; Builder directory</a>`}
        ${next ? `<a class="pager-link next" href="${next.page}">${escapeHtml(next.title)} &rarr;</a>` : `<a class="pager-link next" href="index.html">Builder directory &rarr;</a>`}
      </nav>
    `;

    setupBuilderForm(builder);
  }

  function valuesFromForm(builder, form) {
    const values = {};
    builder.fields.forEach((field) => {
      if (field.type === "checkbox-group") {
        values[field.name] = Array.from(form.querySelectorAll(`input[name="${field.name}"]:checked`)).map((input) => input.parentElement.textContent.trim());
      } else {
        const input = form.elements[field.name];
        values[field.name] = input ? input.value.trim() : "";
      }
    });
    return values;
  }

  function section(title, lines) {
    const content = lines.filter(Boolean).join("\n\n").trim();
    return content ? `## ${title}\n\n${content}` : "";
  }

  function fieldMarkdown(field, value) {
    if (Array.isArray(value)) {
      if (!value.length) return "";
      return `### ${field.label}\n${value.map((item) => `- ${item}`).join("\n")}`;
    }
    if (!value) return "";
    return `### ${field.label}\n${value}`;
  }

  function buildMarkdown(builder, values) {
    const groups = groupFields(builder.fields);
    const lines = [
      `# ${builder.title.replace(" Builder", "")}`,
      "",
      `Draft status: ${values.draftStatus || "Draft - needs review"}`,
      `Generated: ${today()}`,
      `Output file: ${builder.file}`,
      "",
      `Evidence boundary: ${builder.claimBoundary}`
    ];

    const sections = Object.entries(groups)
      .map(([group, fields]) => {
        const groupLines = fields
          .filter((field) => !["draftStatus"].includes(field.name))
          .map((field) => fieldMarkdown(field, values[field.name]))
          .filter(Boolean);
        return section(group, groupLines);
      })
      .filter(Boolean);

    const review = section("Review Notes", [
      "- Keep public pages limited to public-safe sections unless approval is recorded.",
      "- Verify source links, source dates and claim wording before grant, government, sponsor or media use.",
      "- Do not convert clinical-adjacent notes into medical advice.",
      "- Do not publish private, commercial, health, cultural or approval-gated notes by default."
    ]);

    return [...lines, "", ...sections, review, ""].join("\n").replace(/\n{3,}/g, "\n\n");
  }

  function setupBuilderForm(builder) {
    const form = document.querySelector("[data-builder-form]");
    const output = document.querySelector("[data-markdown-output]");
    const status = document.querySelector("[data-status]");
    const generate = document.querySelector("[data-generate]");
    const copy = document.querySelector("[data-copy]");
    const download = document.querySelector("[data-download]");
    const clear = document.querySelector("[data-clear]");
    const storageKey = `straddie-vitality-${builder.id}`;

    if (!form || !output) return;

    function render() {
      const values = valuesFromForm(builder, form);
      const markdown = buildMarkdown(builder, values);
      output.value = markdown;
      localStorage.setItem(storageKey, JSON.stringify(values));
      if (status) status.textContent = "Preview updated locally. Review before sharing.";
      return markdown;
    }

    function restore() {
      const stored = localStorage.getItem(storageKey);
      if (!stored) {
        const statusField = form.elements.draftStatus;
        if (statusField) statusField.value = "Draft - needs review";
        return;
      }
      try {
        const values = JSON.parse(stored);
        builder.fields.forEach((field) => {
          if (field.type === "checkbox-group") {
            form.querySelectorAll(`input[name="${field.name}"]`).forEach((input) => {
              input.checked = Array.isArray(values[field.name]) && values[field.name].includes(input.parentElement.textContent.trim());
            });
          } else if (form.elements[field.name] && values[field.name] !== undefined) {
            form.elements[field.name].value = values[field.name];
          }
        });
      } catch (error) {
        localStorage.removeItem(storageKey);
      }
    }

    form.addEventListener("input", render);
    form.addEventListener("change", render);
    generate.addEventListener("click", render);
    copy.addEventListener("click", async () => {
      const markdown = render();
      try {
        await navigator.clipboard.writeText(markdown);
        if (status) status.textContent = "Markdown copied.";
      } catch (error) {
        output.focus();
        output.select();
        document.execCommand("copy");
        if (status) status.textContent = "Markdown selected and copied with fallback.";
      }
    });
    download.addEventListener("click", () => {
      const markdown = render();
      const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const datedName = builder.file.replace(/\.md$/i, `-${slugDate()}.md`);
      link.href = url;
      link.download = datedName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      if (status) status.textContent = `Downloaded ${datedName}.`;
    });
    clear.addEventListener("click", () => {
      form.reset();
      localStorage.removeItem(storageKey);
      const statusField = form.elements.draftStatus;
      if (statusField) statusField.value = "Draft - needs review";
      render();
      if (status) status.textContent = "Form reset.";
    });

    restore();
    render();
  }

  renderHeader();
  renderFooter();
  setupNav();
  setupTopButton();
  renderBuilderCards();
  renderBuilderShell();
})();
