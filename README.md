# Building Ladders: Extending Human Agency with AI

A presentation demonstrating how AI can be used to create "ladders" that help people engage with complex domains, specifically showcasing automatic text alternative generation for web accessibility.

[Watch the video here](https://drive.google.com/file/d/1m1q8f3YFf-hT1-FY0O5cZq6Eolo7n_bV/view?usp=sharing), view the [presentation slides](https://github.com/dylan-isaac/Building-Ladders--Extending-Human-Agency-with-AI--Talk-/blob/main/presentation.md), or see the [demoed Alt Text Prompt]([https://github.com/dylan-isaac/Building-Ladders--Extending-Human-Agency-with-AI--Talk-/blob/main/presentation.md](https://github.com/dylan-isaac/Building-Ladders--Extending-Human-Agency-with-AI--Talk-/blob/main/Demo/prompt.md))

## 🎯 Overview

This talk explores how AI can bridge the gap between human understanding and complex technical domains, using accessibility as a concrete example. Rather than forcing people to adapt to computers, we can build systems that adapt to people's existing knowledge and workflows.

The presentation includes live demonstrations of an AI system that generates appropriate alt text for images by understanding page context, author intent, and visual semantics—essentially performing "modality translation" from visual to textual media.

## 🚀 Getting Started

### Prerequisites

- [Obsidian](https://obsidian.md/) (desktop application)
- Git (to clone this repository)

### Setup Instructions

1. **Clone this repository:**
   ```bash
   git clone <repository-url>
   cd "Talk - Building Ladders- Extending Human Agency with AI"
   ```

2. **Open in Obsidian:**
   - Launch Obsidian
   - Click "Open folder as vault"
   - Select this project directory
   - Obsidian will automatically detect the vault configuration

3. **Plugin Configuration:**
   - The `.obsidian` folder contains pre-configured settings
   - **Advanced Slides** plugin is already enabled and configured
   - No additional setup required—the presentation should work immediately

4. **View the Presentation:**
   - Open `presentation.md` in Obsidian
   - Click the "Start Presentation" button (Advanced Slides icon) in the ribbon
   - Or use Command/Ctrl + P and search for "Advanced Slides: Start Presentation"

### Alternative Viewing

The `presentation.md` file uses reveal.js syntax and can also be viewed in any reveal.js-compatible renderer outside of Obsidian. Additionally, the presentation.md file is quite readable from the GitHub preview as well.

## 📋 Presentation Structure

The talk is organized into the following sections:

1. **Introduction & Journey** - Personal background and the accessibility → AI connection
2. **The Vision** - Making digital experiences equitable through adaptive technology  
3. **Paradigm Shift** - From humans adapting to computers → computers adapting to humans
4. **Breakthrough Example** - Apple Math Notes as an exemplar
5. **Live Demo** - Automatic text alternatives generation
6. **Philosophy** - Building ladders vs. walls, and our responsibility as builders

## 🧪 Demo System: Automatic Text Alternatives

The core demonstration showcases an AI system that generates appropriate alt text for images by understanding context at multiple levels.

### What the Demo Tests

The demo system evaluates an AI model's ability to:

1. **Contextual Understanding**: Can the AI understand how an image functions within its page context?
2. **Author Intent Recognition**: Can it determine why an author chose to include a specific image?
3. **Appropriate Classification**: Can it distinguish between decorative, simple informative, and complex informative images?
4. **Semantic Translation**: Can it translate visual information into equivalent textual experiences?
5. **Accessibility Standards Compliance**: Does it follow WCAG guidelines for alt text?

### Demo Components

#### `Demo/prompt.md` - The Core Prompt Template
A structured prompt that guides the AI through a 5-step process:
1. **Page Context Analysis** - Understanding the overall page purpose
2. **Surrounding Content Analysis** - Analyzing how the image is used 
3. **Image Classification & Author Intent** - Determining image type and purpose
4. **Alt Text Generation** - Creating appropriate alternative text
5. **Structured Alternative** - Providing detailed alternatives for complex images

#### `Demo/extractPageContext.js` - Context Extraction Tool
A JavaScript function that programmatically extracts semantic page information:
- Page structure (headings, landmarks, metadata)
- Open Graph data for social context  
- Navigation and content organization
- Deduplication and visibility filtering

This script can be run in a browser console to gather the `<page_context>` input for the AI system.

#### Test Cases

The system includes three carefully chosen test scenarios:

##### 1. YouTube Video (`Demo/examples/1. Youtube Video/`)
**Tests**: Video thumbnail recognition and clickable media context
- **Input**: iOS 26 features video thumbnail from YouTube homepage
- **Challenge**: Distinguishing informative thumbnails from decorative elements
- **Expected Behavior**: Concise description focusing on visual content preview

##### 2. Create Button (`Demo/examples/2. Create Button/`)  
**Tests**: Functional UI element identification and decorative vs. informative classification
- **Input**: Plus icon in YouTube's "Create" button interface
- **Challenge**: Determining if icons with adjacent text are decorative
- **Expected Behavior**: Empty alt text `""` when function is clear from context

##### 3. Semantic Feature Space (`Demo/examples/3. Semantic Feature Space/`)
**Tests**: Complex data visualization and structured alternative generation
- **Input**: Scatter plot showing word embedding coordinates for "man", "woman", "boy", "girl"
- **Challenge**: Converting complex visual relationships into accessible formats
- **Expected Behavior**: Concise alt text + structured data table alternative
