function OnHoverHeaderButton(button, image, text) {
      button.className = 'hover_header_button';
      text.className = 'hover_header_text';
      
      let fullPath = image.src;
      let fileName = fullPath.replace(/^.*[\\\/]/, '');

      fileName = fileName.slice(0, fileName.length - 4) + "Fill.png";

      image.src = "Resources/Icons/" + fileName
      image.className = "hover_header_img"
};

function OnStopHoverHeaderButton(button, image, text) {
      button.className = '';
      text.className = '';
      
      let fullPath = image.src;
      let fileName = fullPath.replace(/^.*[\\\/]/, '');

      fileName = fileName.slice(0, fileName.length - 8) + ".png";

      image.src = "Resources/Icons/" + fileName;
      image.className = "";
};