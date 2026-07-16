document.addEventListener("DOMContentLoaded", () => {
    // File Upload Elements
    const pdfInput = document.getElementById("pdf-input");
    const uploadStatus = document.getElementById("upload-status");

    // Question + Answer Elements
    const questionEl = document.getElementById("question");
    const askBtn = document.getElementById("ask-btn");
    const statusEl = document.getElementById("status");

    const answerEl = document.getElementById("answer");
    const answerTextEl = document.getElementById("answer-text");

    const qtypePill = document.getElementById("qtype-pill");
    const toolPill = document.getElementById("tool-pill");

    const sourcesEl = document.getElementById("sources");
    const sourcesListEl = document.getElementById("sources-list");

    // Question Type Colors
    const QTYPE_COLORS = {
        definition: "badge-pill pill-sage",
        example: "badge-pill pill-dark",
        comparison: "badge-pill pill-sage"
    };

    // Reset UI Helper
    function resetAnswerUI() {
        answerEl.hidden = true;

        answerTextEl.textContent = "";

        qtypePill.hidden = true;
        qtypePill.textContent = "";
        qtypePill.className = "";

        toolPill.hidden = true;
        toolPill.textContent = "";

        sourcesEl.hidden = true;

        while (sourcesListEl.firstChild) {
            sourcesListEl.removeChild(sourcesListEl.firstChild);
        }
    }

    // File Upload Feedback
    pdfInput.addEventListener("change", () => {
        const file = pdfInput.files[0];

        if (!file) {
            uploadStatus.textContent = "";
            uploadStatus.className = "";
            return;
        }

        uploadStatus.textContent = `Selected "${file.name}" (ready to upload)`;

        uploadStatus.className =
            "text-sm text-green-600 mt-2 min-h-[1.25rem]";
    });

    // Submit Button Logic
    askBtn.addEventListener("click", () => {
        // Step 1 — Read + Validate
        const question = questionEl.value.trim();

        if (!question) {
            statusEl.textContent = "Please type a question first.";

            statusEl.className =
                "text-sm text-red-500 mt-2 min-h-[1.25rem]";

            resetAnswerUI();

            return;
        }

        // Step 2 — Loading State
        resetAnswerUI();

        statusEl.textContent = "Thinking...";

        statusEl.className =
            "text-sm text-gray-500 mt-2 min-h-[1.25rem]";

        // Step 3 — Simulated Backend Delay
        setTimeout(() => {

            // Step 4 — Determine Question Type
            let placeholderType = "definition";

            const lowerQuestion = question.toLowerCase();

            if (lowerQuestion.startsWith("what is")) {
                placeholderType = "definition";
            } else if (
                lowerQuestion.startsWith("give") ||
                lowerQuestion.includes("example")
            ) {
                placeholderType = "example";
            } else if (
                lowerQuestion.includes("vs") ||
                lowerQuestion.includes("versus") ||
                lowerQuestion.includes("compare") ||
                lowerQuestion.includes("difference")
            ) {
                placeholderType = "comparison";
            }

            // Step 5 — Determine Tool
            let placeholderTool = "search_notes";

            const calculatorPattern = /^[0-9+\-*/().\s]+$/;

            if (calculatorPattern.test(question)) {
                placeholderTool = "calculator";
            }

            // Step 6 — Build Placeholder Answer
            const placeholderAnswer =
                `Placeholder answer for: "${question}". Real answers will appear here once the backend is connected.`;

            // Step 7 — Populate UI

            // Answer Text
            answerTextEl.textContent = placeholderAnswer;

            // Question Type Pill
            qtypePill.hidden = false;
            qtypePill.textContent = `type: ${placeholderType}`;
            qtypePill.className = QTYPE_COLORS[placeholderType];

            // Tool Pill
            toolPill.hidden = false;
            toolPill.textContent = `tool: ${placeholderTool}`;
            toolPill.className = "badge-pill pill-dark";

            // Sources
            if (placeholderTool !== "calculator") {

                sourcesEl.hidden = false;

                const sources = [
                    "Sample source chunk 1 — example excerpt from the uploaded notes.",
                    "Sample source chunk 2 — another excerpt.",
                    "Sample source chunk 3 — final excerpt."
                ];

                sources.forEach((sourceText) => {
                    const li = document.createElement("li");
                    li.textContent = sourceText;

                    sourcesListEl.appendChild(li);
                });
            }

            // Reveal Final UI
            answerEl.hidden = false;

            statusEl.textContent = "";
            statusEl.className = "";

        }, 600);
    });
});